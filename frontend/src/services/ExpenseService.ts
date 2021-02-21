import http from "../http-common";

class ExpenseService {
  getAll() {
    return http.get("/expenses");
  }

  get(id: string) {
    return http.get(`/expenses/${id}`);
  }

  create(data: any) {
    return http.post("/expenses", data);
  }

  update(id: string, data: any) {
    return http.put(`/expenses/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/expenses/${id}`);
  }

  deleteAll() {
    return http.delete(`/expenses`);
  }

  findByTitle(title: string) {
    return http.get(`/expenses?title=${title}`);
  }
}

export default new ExpenseService();
