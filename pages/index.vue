<template>
  <b-container fluid class="p-0">
    <b-container fluid tag="header" class="header m-0 p-0">
      <b-row class="m-0 p-0 d-flex align-items-center">
        <b-col class="m-0 p-1 d-flex align-items-center">
          <h1 class="brand d-flex align-items-center">Lovely Rubber</h1>
        </b-col>
        <b-col class="text-right">
          <a href="https://github.com/mi-ki-ri/lovely-rubber">
            <span class="tori bg-white m-0 p-1">🐥</span>
          </a>
        </b-col>
      </b-row>
    </b-container>

    <b-container tag="footer" class="footer">
      <b-row>
        <b-col cols="10"> <b-textarea v-model="msg" class="textarea" /> </b-col
        ><b-col>
          <b-button variant="info" class="submit" @click="test"
            >Submit</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-container tag="main" class="main">
      <b-row :key="index" v-for="(response, index) of responses">
        <b-col class="msg m-2 mb-4">
          {{ response.msg }}
        </b-col>
        <b-col class="response m-2 mb-4">
          {{ response.response }}
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      msg: "",
      responses: [],
      api: "https://us-central1-rubber-app.cloudfunctions.net/rubber",
      gobis: [
        "。",
        "。",
        "？",
        "！",
        "だね。",
        "なんだね。",
        "なんだ。",
        "だって。",
        "なの？",
        "って？"
      ],
      aizutis: ["はい。", "うん。", "へえ。", "そうなんだ。", "そう。"]
    };
  },
  methods: {
    sendMSG() {
      axios.get(this.api, this.msg).then(result => {
        this.response = result.data;
      });
    },
    test() {
      let gobi = this.gobis[Math.floor(Math.random() * this.gobis.length)];
      let gotou = this.aizutis[Math.floor(Math.random() * this.aizutis.length)];
      let msg = this.msg.length > 0 ? this.msg : "";

      if (msg == "") {
        this.responses.push({
          msg: "…",
          response: "えっ、何？　よく聞こえなかった。"
        });
      }

      this.msg = "";

      axios
        .post(
          "https://api.ce-cotoha.com/v1/oauth/accesstokens",
          {
            grantType: "client_credentials",
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res);

          let accessToken = res.data.access_token;
          let apiURL = "https://api.ce-cotoha.com/api/dev/nlp/v1/keyword";
          let original = msg;
          axios
            .post(
              apiURL,
              {
                document: original,
                type: "kuzure"
              },
              {
                headers: {
                  "Content-Type": "application/json; charset=UTF-8",
                  Authorization: "Bearer " + accessToken
                }
              }
            )
            .then(words => {
              console.log(words);
              var result = "";
              if (words.data.result.length > 0) {
                result =
                  gotou +
                  words.data.result[
                    Math.floor(Math.random() * words.data.result.length)
                  ].form +
                  gobi;
                this.responses.push({
                  msg: original,
                  response: result
                });
              } else {
                result = this.aizutis[
                  Math.floor(Math.random() * this.aizutis.length)
                ];
                this.responses.push({
                  msg: original,
                  response: result
                });
              }

              console.log(result);
            })
            .catch(err => {
              return err;
            });
        });
    }
  }
};
</script>

<style>
.msg {
  border: 2px solid rgba(0, 0, 255, 0.8);
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 5px;
}
.msg::before {
  content: "";
  position: absolute;
  bottom: 2px;
  left: -10px;
  display: block;
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-right: 10px solid rgba(0, 0, 255, 0.8);
  border-top: 10px solid transparent;
}
.response {
  border: 2px solid rgba(255, 122, 0, 0.8);
  background-color: rgba(255, 122, 0, 0.1);
  border-radius: 5px;
}
.response::before {
  content: "";
  position: absolute;
  bottom: 2px;
  right: -10px;
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid rgba(255, 122, 0, 0.8);
  border-bottom: 10px solid transparent;
}
.main {
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
.header {
  background-color: var(--yellow);
}
.brand {
  font-size: 1rem;
  color: white;
}
.footer {
  border-bottom: 1px solid var(--gray);
  padding-bottom: 10px;
  padding-top: 10px;
}
.textarea {
  width: 100%;
}
.submit {
  margin-left: auto;
  width: 100%;
  height: 100%;
}

.tori {
  border-radius: 10%;
}

/*スクロールバー全体*/
::-webkit-scrollbar {
  width: 10px;
}

/*スクロールバーの軌道*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
}

/*スクロールバーの動く部分*/
::-webkit-scrollbar-thumb {
  background-color: rgba(223, 182, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
}
</style>
