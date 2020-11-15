import http from "../http-common";

class AppointmentService {
  getAll() {
    return http.get("/appointment");
  }

  get(id) {
    return http.get(`/appointment/${id}`);
  }

  create(data) {
    return http.post("/appointment", data);
  }

  update(id, data) {
    return http.put(`/appointment/${id}`, data);
  }

  delete(id) {
    return http.delete(`/appointment/${id}`);
  }

  deleteAll() {
    return http.delete(`/appointment`);
  }

  findByTitle(title) {
    return http.get(`/appointment?title=${title}`);
  }
}

export default new AppointmentService();
