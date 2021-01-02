const indexModule = (() => {
  // 検索ボタンをクリックした際のイベントを設定
  document
    .getElementById("search-btn")
    .addEventListener("click", searchModule.searchUsers);
  // UserモジュールのfetchAllUsersメソッドを呼び出す
  return usersModule.fetchAllUsers();
})();
