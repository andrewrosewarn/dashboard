import { IEnvironment } from "../interfaces/environment";

const environments: IEnvironment[] = [
  { id: "aws", name: "AWS" },
  { id: "azure", name: "Azure" },
];

export async function getEnvironments(): Promise<IEnvironment[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(environments);
    }, 500);
  });
}

export async function getEnvironment(id: string): Promise<IEnvironment> {
  return new Promise((res) => {
    setTimeout(() => {
      res(environments.filter((environment) => environment.id === id)[0]);
    }, 500);
  });
}
