import axios from "axios";

class FaqService {

    saveFaq(faq) {
        return axios.post("http://localhost:8090/api/faqs", faq);
    }

    getFaqs() {
        return axios.get("http://localhost:8090/api/faqs");
    }

}

export default new FaqService;