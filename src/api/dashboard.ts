import { IDashboard } from "../interfaces/dashboard";

const dashboards: IDashboard[] = [
  {
    id: "aws1",
    name: "AWS One",
  },
  {
    id: "aws2",
    name: "AWS Two",
  },

  {
    id: "azure1",
    name: "Azure One",
  },
  {
    id: "azure2",
    name: "Azure Two",
  },
  {
    id: "azure3",
    name: "Azure Three",
  },
];

export async function getDashboard(id: string): Promise<IDashboard> {
  return new Promise((res) => {
    res(dashboards.filter((dashboard) => dashboard.id === id)[0]);
  });
}
