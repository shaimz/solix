import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isLoading:true,
        role: [],
        lang: [],
        language: [],
        publicLanguage:[],
        dataForm: [],
        userSession: [],
        productRequests: [],
        productRequest: [],
        serviceRequests: [],
        serviceRequest: [],
        callRequests: [],
        callRequest: [],
        countRequests: [],
        products: [],
        singleProduct:[],
        product:[],
        productsByLanguage:[],
        categories: [],
        categoryByUrl:[],
        category:[],
        brands:[],
        projects:[],
        singleProject:[],
        projectsByLanguage:[],
        news:[],
        singleNews:[],
        services:[],
        service:[],
        fetchedNews:[],
        newsTotal:[],
        newsByLanguage:[],
        careers:[],
        singleCareer:[],
        types:[],
        page:1,
        type:0
    },
    getters: {
        isLoading(state){
          return state.isLoading;
        },
        getUsers(state) {
            return state.role;
        },
        getUserLanguage(state) {
            return state.lang;
        },
        getSelectedUserLanguage(state) {
            return state.language;
        },
        getPublicLanguage(state){
          return state.publicLanguage;
        },
        getFormDataByLanguage(state) {
            return state.dataForm;
        },
        getUserSession(state) {
            return state.userSession;
        },
        getProductRequests(state) {
            return state.productRequests;
        },
        getProductRequestById(state) {
            return state.productRequest;
        },
        getServiceRequests(state) {
            return state.serviceRequests;
        },
        getServiceRequestById(state) {
            return state.serviceRequest;
        },
        getCallRequests(state) {
            return state.callRequests;
        },
        getCallRequestById(state) {
            return state.callRequest;
        },
        getRequestCount(state) {
            return state.countRequests;
        },
        getProducts(state) {
            return state.products;
        },
        getSingleProduct(state){
            return state.singleProduct;
        },
        getProduct(state){
            return state.product;
        },
        getProductsByLanguage(state){
          return state.productsByLanguage;
        },
        getCategories(state) {
            return state.categories;
        },
        getCategoryByUrl(state){
            return state.categoryByUrl;
        },
        getCategory(state){
          return state.category;
        },
        getBrands(state){
            return state.brands;
        },
        getProjects(state){
            return state.projects;
        },
        getSingleProject(state){
            return state.singleProject;
        },
        getTypes(state){
          return state.types;
        },
        getProjectsByLanguage(state){
            return state.projectsByLanguage;
        },
        getNews(state){
            return state.news;
        },
        getSingleNews(state){
            return state.singleNews;
        },
        getServices(state){
            return state.services;
        },
        getService(state){
          return state.service;
        },
        getFetchedNews(state){
            return state.fetchedNews;
        },
        getNewsTotal(state){
            return state.newsTotal;
        },
        getNewsByLanguage(state){
            return state.newsByLanguage;
        },
        getCareers(state){
            return state.careers;
        },
        getSingleCareer(state){
            return state.singleCareer;
        },
        getPage(state){
            return state.page;
        },
        getType(state){
            return state.type;
        }
    },
    actions: {
        setLoading(context,payload){
            context.commit('setLoading',payload);
        },
        role(context) {
            axios.get('/user-role')
                .then((response => {
                    context.commit('userRole', response.data);
                }))
        },
        async userLanguage(context, payload) {
            await axios.get('/user-lang/set/' + payload)
                .then((response) => {
                    context.commit('userLang', response.data);
                })
        },
        async selectedLanguage(context) {
            await axios.get('/user-lang/get')
                .then((response) => {
                    context.commit('selectedUserLang', response.data);
                })
        },
        async setPublicLanguage(context,payload){
              await context.commit('setPublicLanguage',payload)
        },
        dataForm(context, payload) {
            context.commit('getDataForm', payload);
        },
        async userSession(context) {
            await axios.get('/admin/user-session')
                .then((response) => {
                    context.commit('sessionData', response.data.user_session)
                })
        },
        productRequests(context) {
            axios.get('/admin/request-products')
                .then((response) => {
                    context.commit('productsData', response.data);
                })
        },
        productRequest(context, payload) {
            axios.get('/admin/request-products/' + payload)
                .then((response) => {
                    context.commit('getProductRequest', response.data);
                })
        },
        serviceRequests(context) {
            axios.get('/admin/request-services')
                .then((response) => {
                    context.commit('servicesData', response.data);
                })
        },
        serviceRequest(context, payload) {
            axios.get('/admin/request-services/' + payload)
                .then((response) => {
                    let str = response.data.created_at;
                    let d = Date.parse(str);

                    let res = new Date(d);

                    let hr = ("0" + res.getHours()).slice(-2);
                    let min = ("0" + res.getMinutes()).slice(-2);

                    response.data.created_at = res.getFullYear() + "/" + res.getMonth() + 1 + "/" + res.getDate() + " " + hr + ":" + min;
                    context.commit('getServiceRequest', response.data);
                })
        },
        callRequests(context) {
            axios.get('/admin/request-calls')
                .then((response) => {
                    context.commit('callsData', response.data);
                })
        },
        callRequest(context, payload) {
            axios.get('/admin/request-calls/' + payload)
                .then((response) => {
                    let str = response.data.created_at;
                    let d = Date.parse(str);

                    let res = new Date(d);

                    let hr = ("0" + res.getHours()).slice(-2);
                    let min = ("0" + res.getMinutes()).slice(-2);

                    response.data.created_at = res.getFullYear() + "/" + res.getMonth() + 1 + "/" + res.getDate() + " " + hr + ":" + min;
                    context.commit('getCallRequest', response.data);
                })
        },
        countRequests(context) {
            axios.get('/admin/requests/all')
                .then((response) => {
                    context.commit('getCountRequests', response.data);
                })
        },
        async products(context, payload) {
            await axios.post('/admin/get-products',{lang_id:payload ? payload.lang_id : 0,category_id:payload ? payload.category_id : 0,length:(payload.length ? payload.length : 0),offset:(payload.offset ? payload.offset : 0)})
                .then((response) => {
                    context.commit('getProducts', response.data);
                })
        },
        async singleProduct(context,payload){
          await axios.get('/admin/products/'+payload.id + '/' + payload.lang)
              .then((response)=>{
                  context.commit('getSingleProduct',response.data);
              })
        },
        async product(context,payload){
            await axios.get('/product/'+payload.id + '/' + payload.lang)
                .then((response)=>{
                    context.commit('getProduct',response.data);
                })
        },
        async productsByLanguage(context,payload){
            await axios.post('/products/more',{lang:payload.lang,limit:payload.limit,id:payload.id})
                .then((response)=>{
                    context.commit('getProductsByLanguage',response.data);
                })
        },
        async categories(context,payload) {
            await axios.post('/categories',{lang_id:payload.lang_id})
                .then((response) => {
                    context.commit('getCategories', response.data);
                })
        },
        async categoryByUrl(context,payload){
            await axios.post('/category',{lang_id:payload.lang_id,url:payload.url})
                .then((response)=>{
                    context.commit('getCategoryByUrl',response.data);
                })
        },
        async category(context,payload){
            await axios.post('/get-category',{lang_id:payload.lang_id,parent_id:payload.parent_id})
                .then((response)=>{
                    context.commit('getCategory',response.data);
                })
        },
        async brands(context,payload){
          await axios.post('/brands',{lang_id:payload.lang_id,categoryId:payload.category_id})
              .then((response)=>{
                  context.commit('getBrands',response.data);
              })
        },
        async projects(context, payload) {
            await axios.get('/get-projects', payload ? {params:{lang:(payload.lang ? payload.lang : 0) , limit:(payload.limit ? payload.limit : 0), offset:(payload.offset ? payload.offset : 0),type:payload.type ? payload.type : null}} : '')
                .then((response) => {
                    context.commit('getProjects', response.data);
                })
        },
        async singleProject(context,payload){
            await axios.get('/admin/projects/'+payload.id + '/' + (payload.lang ? payload.lang : '0'))
                .then((response)=>{
                    context.commit('getSingleProject',response.data);
                })
        },
        async projectsByLanguage(context,payload){
          await axios.post('/projects/more',{lang:payload.lang,limit:payload.limit,id:payload.id})
              .then((response)=>{
                  context.commit('getProjectsByLanguage',response.data);
              })
        },
        async news(context, payload) {
            await axios.get('/admin/get-news/' + (payload ? payload : 0))
                .then((response) => {
                    context.commit('getNews', response.data);
                })
        },
        async fetchNews(context,payload){
          await axios.post('/news',{lang_id:payload.lang_id,limit:payload.limit,offset:payload.offset})
              .then((response)=>{
                  context.commit('getFetchedNews',response.data);
              })
        },
        async singleNews(context,payload){
            await axios.get('/admin/news/'+payload.id + '/' + (payload.lang ? payload.lang : 0))
                .then((response)=>{
                    context.commit('getSingleNews',response.data);
                })
        },
        async services(context,payload){
            await axios.post('/admin/services',{lang_id:payload.lang_id,limit:payload.limit,offset:payload.offset})
                .then((response)=>{
                    context.commit('getServices',response.data);
                })
        },
        async service(context,payload){
            await axios.post('/admin/service',{lang_id:payload.lang_id,id:payload.id})
                .then((response) => {
                context.commit('getService',response.data)
            })
        },
        async newsTotal(context){
            await axios.post('/news/all')
                .then((response)=>{
                    context.commit('getNewsTotal',response.data);
                })
        },
        async newsByLanguage(context,payload){
            await axios.post('/news/language',{lang_id:payload.lang,length:payload.length,id:payload.id})
                .then((response)=>{
                    context.commit('getNewsByLanguage',response.data);
                })
        },
        async careers(context,payload){
            await axios.post('/careers',{lang_id:payload.lang_id})
                .then((response)=>{
                    context.commit('getCareers',response.data);
                })
        },
        async singleCareer(context,payload){
            await axios.post('/career',{lang_id:payload.lang_id,id:payload.id})
                .then((response)=>{
                    context.commit('getSingleCareer',response.data);
                })
        },
        async types(context,payload){
            await axios.post('/admin/projects/types',{lang_id:payload.lang_id})
                .then((response)=>{
                    context.commit('getTypes',response.data);
                })
        },
        page(context,payload){
            context.commit('getPage',payload)
        },
        type(context,payload){
            context.commit('getType',payload);
        }
    },
    mutations: {
        setLoading(state,data){
          return state.isLoading = data;
        },
        userRole(state, data) {
            return state.role = data;
        },
        userLang(state, data) {
            return state.lang = data;
        },
        selectedUserLang(state, data) {
            return state.language = data;
        },
        setPublicLanguage(state,data){
          return state.publicLanguage = data;
        },
        getDataForm(state, data) {

/*
            let index = state.dataForm.findIndex(item => item.activeItem === data.activeItem);
*/
            return state.dataForm = data;

        },
        sessionData(state, data) {
            return state.userSession = data;
        },
        productsData(state, data) {
            return state.productRequests = data;
        },
        getProductRequest(state, data) {
            return state.productRequest = data;
        },
        servicesData(state, data) {
            return state.serviceRequests = data;
        },
        getServiceRequest(state, data) {
            return state.serviceRequest = data;
        },
        callsData(state, data) {
            return state.callRequests = data;
        },
        getCallRequest(state, data) {
            return state.callRequest = data;
        },
        getCountRequests(state, data) {
            return state.countRequests = data;
        },
        getProducts(state, data) {
            return state.products = data;
        },
        getSingleProduct(state,data){
            return state.singleProduct = data;
        },
        getProduct(state,data){
            return state.product = data;
        },
        getProductsByLanguage(state,data){
          return state.productsByLanguage = data;
        },
        getProjectsByLanguage(state,data){
          return state.projectsByLanguage = data;
        },
        getCategories(state, data) {
            return state.categories = data;
        },
        getCategoryByUrl(state,data){
            return state.categoryByUrl = data;
        },
        getCategory(state,data){
            return state.category = data;
        },
        getBrands(state,data){
          return state.brands = data;
        },
        getProjects(state,data){
            return state.projects = data;
        },
        getSingleProject(state,data){
            return state.singleProject = data;
        },
        getNews(state,data){
            return state.news = data;
        },
        getSingleNews(state,data){
            return state.singleNews = data;
        },
        getServices(state,data){
            return state.services = data;
        },
        getService(state,data){
          return state.service = data;
        },
        getFetchedNews(state,data){
            return state.fetchedNews = data;
        },
        getNewsTotal(state,data){
            return state.newsTotal = data;
        },
        getNewsByLanguage(state,data){
            return state.newsByLanguage = data;
        },
        getCareers(state,data){
            return state.careers = data;
        },
        getSingleCareer(state,data){
            return state.singleCareer = data;
        },
        getTypes(state,data){
            return state.types = data;
        },
        getPage(state,data){
            return state.page = data;
        },
        getType(state,data){
            return state.type = data;
        }
    }
})


export default store;
