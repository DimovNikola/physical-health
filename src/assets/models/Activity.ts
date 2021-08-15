export class Activity {

  id: number;
  name: string;
  deadline: string;
  description: string;
  requisites: string;
  date: string;

  constructor(id: number, name: string, deadline: string, description: string, requisites: string, date: string) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.description = description;
    this.requisites = requisites;
    this.date = date;
  }

  getName() {
    return this.name;
  }

  getDeadline() {
    return this.deadline;
  }

  getDescription() {
    return this.description;
  }

  getRequisites() {
    return this.requisites;
  }

  getDate() {
    return this.date;
  }

  getId() {
    return this.id;
  }

}
