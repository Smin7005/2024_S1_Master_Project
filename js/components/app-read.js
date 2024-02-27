// app-readmysql component
const ReadMysql ={
  // define the template for the component
  template: `
  <v-row>

    <v-col cols="12" md="12 " >

    <v-card
       class="mx-auto"
       max-width="90%"
       >

       <v-card-title>
       <h2>List of People in Database</h2>
       </v-card-title>

       <v-card-text>
        <ul class="list-group">
            <li class="list-group-item" v-for="u in getItems" :key="u.id">
                <video alt="video" height="400" width="600" controls>
                    <source v-bind:src='u.fpath' type="video/mp4"/>
                </video>
                <br />
                {{u.id}} {{u.code}} {{u.desc}} {{u.cp}} {{u.type}}
            </li>
        </ul>

        </v-card-text>
        </v-card>
        </v-col>

       <v-col cols="12" md="12">
       <paginate
     :page-count=getPageCount
     :page-range="3"
     :margin-pages="1"
     :click-handler="clickCallback"
     :prev-text=" 'Prev' "
     :next-text="'Next'"
     :container-class="'pagination'"
     :page-class="'page-item'"
     :active-class="'currentPage'">
     </paginate>
     </v-col>
     </v-row>
   `,
   // variable initialization
  data: function() {
    return {
      perPage:3,
      currentPage:1,
      units: []
    }
  },
  components: {
            paginate: VuejsPaginateNext,
    },
  computed:{
    // returns the data according to the page number
    getItems: function() {
        let current = this.currentPage * this.perPage;
        let start = current - this.perPage;
        return this.units.slice(start, current);
     },
     //returns total number of pages required according to the total rows of data
     getPageCount: function() {
      return Math.ceil(this.units.length / this.perPage);
     }
  },
  methods:{
    //sets the clicked page
    clickCallback: function(pageNum){
        this.currentPage = Number(pageNum);
      }
    },
  created() {
    var self = this
    var readSQLApiURL = 'resources/apis.php/' //define url for api

    // GET request using fetch with error handling
            fetch(readSQLApiURL )
            .then( response =>{
              //turning the response into the usable data
              return response.json( );
            })
            .then( data =>{
              //This is the data you wanted to get from url
              self.units=data;
            })
            .catch(error => {
              self.errorMessage = error;
            });
  }
}
