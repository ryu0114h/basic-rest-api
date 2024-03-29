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

    case "/edit.html":
      const uid = window.location.search.split("?uid=")[1];

      document
        .getElementById("save-btn")
        .addEventListener("click", () => usersModule.saveUser(uid));
      document
        .getElementById("cancel-btn")
        .addEventListener("click", () => (window.location.href = "/"));
      document
        .getElementById("delete-btn")
        .addEventListener("click", () => usersModule.deleteUser(uid));

      return usersModule.setExistingValue(uid);

    default:
      break;
  }
})();
