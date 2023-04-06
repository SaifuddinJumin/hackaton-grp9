import Constants from "./Constants";

const Endpoints = {
    CATEGORY_URL: `${Constants.BASE_URL}category/`,
    SUB_CATEGORY_URL: `${Constants.BASE_URL}subcategory/`,
    USERS_BY_ID: `${Constants.BASE_URL}users/`,

    COMMENT_POST: `${Constants.BASE_URL}api/submit-form`,
    TASK_EDIT_PUT: `${Constants.BASE_URL}api/put-task`
}
export default Endpoints;