// app-putdata component
const PutData = {
  template: `
  <!-- Updating mySQL Table With Name as Key -->
  <v-row>
    <v-col cols="12" md="6 ">

      <v-card class="mx-auto" max-width="90%">
        <v-card-text>
          <!-- Input -->

          <v-form class="form-horizontal">
            <v-text-field label="id" v-model="ID" />
            </v-text-field>

            <v-text-field label="code" v-model="codeVar" />
            </v-text-field>

            <v-text-field label="desc" v-model="descVar" />
            </v-text-field>

            <v-text-field label="cp" v-model="cpVar" />
            </v-text-field>

            <v-text-field label="type" v-model="typeVar" />
            </v-text-field>

            <v-radio-group label="Introduction Video" v-model="video">
                <v-radio label="video1" value="1"></v-radio>
                <v-radio label="video2" value="2"></v-radio>
            </v-radio-group>

            <v-btn depressed v-on:click="putData(ID, codeVar, descVar, cpVar, typeVar, video)" color="primary">
                Update
            </v-btn>
          </v-form>

        </v-card-text>
      </v-card>

    </v-col>
    <!-- Output -->
    <v-col cols="12" md="6">
      <v-card>
        <v-card-text>
          <p>Output Message : {{msg}}</p>
          <p>Status Code: {{statusVal}}</p>
          <p>Status: {{statusText}}</p>
          <p>Response Headers: {{headers}}</p>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
     `,

     //variable initialization
    data: function() {
      return {
        ID:'',
        codeVar: '',
        descVar: '',
        cpVar: '',
        typeVar: '',
        video: '',
        msg: '',
        statusVal: '',
        statusText: '',
        headers: ''
      }
    },
    methods: {

    putData: function(ID, codeVar, descVar, cpVar, typeVar, video) {

      var putSQLApiURL = 'resources/apis.php/id/' + ID;


      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: ID,
            code: codeVar,
            desc: descVar,
            cp: cpVar,
            type: typeVar,
            fpath: 'vid/video' + video + '.mp4'
        })
      };

        fetch(putSQLApiURL, requestOptions)
        .then( response =>{
          //turning the response into the usable data
          return response.json( );
        })
        .then( data =>{
          //This is the data you wanted to get from url
          self.msg="successful";
        })
        .catch(error => {
          self.err=error
        });

    }

    }
  }
