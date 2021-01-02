const indexModule = (() => {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      // 検索ボタンをクリックした際のイベントを設定
      document
        .getElementById("search-btn")
        .addEventListener("click", searchModule.searchUsers);
      // UserモジュールのfetchAllUsersメソッドを呼び出す
      return usersModule.fetchAllUsers();

    case "/create.html":
      document
        .getElementById("save-btn")
        .addEventListener("click", usersModule.createUser);
      document
        .getElementById("cancel-btn")
        .addEventListener("click", () => (window.location.href = "/"));
      break;

    default:
      break;
  }
})();
