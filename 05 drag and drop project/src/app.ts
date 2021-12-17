// Validatable
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// function to validate
function validate(validatableInput: Validatable) {
  const value = validatableInput.value;
  let isValid = true;
  // required check
  if (validatableInput.required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }

  // check minLength
  if (validatableInput.minLength != null && typeof value === "string") {
    isValid = isValid && value.length >= validatableInput.minLength;
  }

  // check maxLength
  if (validatableInput.maxLength != null && typeof value === "string") {
    isValid = isValid && value.length <= validatableInput.maxLength;
  }

  // check min
  if (validatableInput.min != null && typeof value === "number") {
    isValid = isValid && value >= validatableInput.min;
  }

  // check max
  if (validatableInput.max != null && typeof value === "number") {
    isValid = isValid && value <= validatableInput.max;
  }

  return isValid;
}

// autobind decorator
function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(methodName);
  console.log(descriptor.value);
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return newDescriptor;
}

// enum ProjectStatus
enum ProjectStatus {
  Active,
  Finished,
}

// Project class
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// Listen type
type Listen<T> = (projects: T[]) => void;

abstract class State<T> {
  protected listeners: Listen<T>[] = [];
  constructor() {}
  addListen(fn: Listen<T>) {
    this.listeners.push(fn);
  }
}

// Project Statement Management
class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;
  private constructor() {
    super();
  }

  addProject(title: string, description: string, numPeople: number) {
    const project = new Project(
      Math.random().toString(),
      title,
      description,
      numPeople,
      ProjectStatus.Active
    );

    this.projects.push(project);
    for (const listenFn of this.listeners) {
      listenFn(this.projects.slice());
    }
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }
}

// Global Project statement
const projectState = ProjectState.getInstance();

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostId: string,
    isBeforeEnd: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    this.hostElement = <T>document.getElementById(hostId)!;
    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(isBeforeEnd);
  }

  private attach(beforeEnd: boolean) {
    this.hostElement.insertAdjacentElement(
      beforeEnd ? "beforeend" : "afterbegin",
      this.element
    );
  }

  abstract renderContent(): void;
  abstract configure(): void;
}

// ProjectInput class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  peopleElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", false, "user-input");

    this.titleElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionElement = this.element.querySelector(
      "#description"
    ) as HTMLTextAreaElement;
    this.peopleElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
  }

  configure() {
    // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}

  private gatherUserInputs(): [string, string, number] | void {
    const enteredTitle = this.titleElement.value;
    const enteredDescription = this.descriptionElement.value;
    const enterPeople = this.peopleElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
    };
    const peopleValidatable: Validatable = {
      value: +enterPeople,
      required: true,
      min: 1,
      max: 5,
    };

    // valid
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input.Please try again!");
      return;
    }
    return [enteredTitle, enteredDescription, +enterPeople];
  }

  private clearInputs() {
    this.titleElement.value = "";
    this.descriptionElement.value = "";
    this.peopleElement.value = "";
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInputs = this.gatherUserInputs();
    if (Array.isArray(userInputs)) {
      const [title, description, people] = userInputs;
      console.log(title, description, people);
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }
}

// ProjectItem class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;
  constructor(hostId: string, project: Project) {
    super("single-project", hostId, true, project.id);
    this.project = project;
    this.configure();
    this.renderContent();
  }

  configure(): void {}

  renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent =
      this.project.people.toString()+'(people)';
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

// Project List class
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];
  constructor(private type: "active" | "finished") {
    super("project-list", "app", true, type + "-projects");

    this.assignedProjects = [];
    // add listen
    projectState.addListen((projects: Project[]) => {
      const relvantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });

      this.assignedProjects = relvantProjects;
      this.renderProjects();
    });

    this.renderContent();
  }

  configure(): void {}

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;

    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + "-PROJECTS";
  }

  private renderProjects() {
    const listId = `${this.type}-projects-list`;
    const ulEl = document.getElementById(listId)! as HTMLUListElement;
    ulEl.innerHTML = "";
    for (const project of this.assignedProjects) {
      // 挂载并渲染
      new ProjectItem(ulEl.id, project);
    }
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
