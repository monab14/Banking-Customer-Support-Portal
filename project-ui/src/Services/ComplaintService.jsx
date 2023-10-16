import axios from "axios";

class ComplaintService {

    saveFaq(faq) {
        return axios.post("http://localhost:8090/api/faqs", faq);
    }

    getFaqs() {
        return axios.get("http://localhost:8090/api/complaints/all");
    }

}

export default new ComplaintService;