import { API_BASE_URL } from "../Services/app-config";
// const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      // 추가된 부분
      console.log(error.status);
      if (error.status === 403) {
        window.location.href = "/"; // redirect
      }
      return Promise.reject(error);
    });
}
export function following() {
  return call("/user/following", "GET", null);
}
// export function followerProposal(userDTO) {
//   return call("/user/followProposal", "POST", userDTO);
// }
// export function followerProposal() {
//   return call("/user/followProposal", "POST", null);
// }
export function go_follow_request() {
  window.location.href = "/notification";
}
