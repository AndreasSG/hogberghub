import http from "../http-common";

class ExpenseGroupService {
  getAll() {
    return http.get("/expensegroups");
  }

  get(id: string) {
    return http.get(`/expensegroups/${id}`);
  }

  create(data: any) {
    return http.post("/expensegroups", data);
  }

  update(id: string, data: any) {
    return http.put(`/expensegroups/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/expensegroups/${id}`);
  }

  deleteAll() {
    return http.delete(`/expensegroups`);
  }
}

export default new ExpenseGroupService();
