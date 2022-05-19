<template>
  <div id="app">
    <button @click="login">リクエスト送信</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
      const url = "/login";
      const method = "POST";
      const headers = {
        "Content-Type": "application/json; charset=UTF-8",
      };
      const body = JSON.stringify({
        name: this.name,
        password: this.password,
      });

      fetch(url, { method, headers, body })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Failed to login. Please retry");
            this.name = "";
            this.password = "";
            return { token: "" };
          }
        })
        .then((json) => {
          const token = json.token;
          if (token.length > 0) {
            // Cookieのようなクライアントのデータ保存用ストレージ。
            // Cookieより容量が大きく(5MB)利用時に必要なデータのみ取り出せる。
            localStorage.setItem("token", token);
            location.href = "/menu";
          }
        })
        .catch((error) => {
          console.error("通信に失敗しました", error);
        });
    },
  },
};
</script>
