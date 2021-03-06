import axiosInstance from '../../plugins/axios';
import { CONFIG_ACCESS_TOKEN } from '../../constants';
import { SET_AUTH } from '../store_metronic/auth.module';
export default {
    async getListDataDm({ commit }) {
        
        var config = {
            headers:{
                'Accept': 'application/json',
                //'Authorization' :'Bearer ' + token,
            }
        }

        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }
        
        try {
           
            var result = await axiosInstance.get('/getDataTableDm',config);
             commit('SET_LIST_DATADM',result.data.data)
             console.log("error",result.data.data);
        } catch(error) {
            console.log("error", error);
        }
    },
    async updateDataWithId(context, { maDinhMuc = '', tenMaDinhMuc = '',noteDinhMuc = '', idDinhMuc = '' }) {

        let data = {
            maDinhMuc: maDinhMuc,
            tenMaDinhMuc: tenMaDinhMuc,
            ghiChuDinhMuc:noteDinhMuc,
            id:idDinhMuc
        }
        console.log(data)
        // var config = {
        //     headers:{
        //         'Accept': 'application/json',    
        //     }
        // }
       
        try {
           
            var result = await axiosInstance.post(`updateDataDm/${data.id}`,data);
            console.log('updateDataWithId',result)
            if(result.status === 200) {
                //commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.message
            }
        } catch(error) {
            
            return {
                ok: false,
                error: error.message
            }
        }
    },

    handleSearch({commit},stringSearch) {
        commit('HANDLE_SEARCH',stringSearch)
    },


    async login({ commit, dispatch }, { email = '', password = '' }) {
        // commit('SET_LOADING', true);
        try {
            let data = {
                email: email,
                password: password
            }
            console.log('login qlda')
            var result  = await axiosInstance.post('/login', data);

           
            // commit('SET_LOADING', false);
            if(result.status === 200) {
                let resultUser  = await dispatch('getUserWithId', result.data.token);
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO',{ user:resultUser.data, token:result.data.token } );
                let users={
                        info:resultUser.data,
                        token:result.data.token
                }
                commit(SET_AUTH, users, { root: true });// d??ng c??  ph??p n??y ????? commit 1 mutation t??? 1 module kh??c

                return {
                    ok: true,
                    error: null,
                    data: result.data
                }
                
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }
            
        } catch(error) {
            console.log('error');
            
            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async register({ commit, dispatch }, data) {
        // commit('SET_LOADING', true);
        console.log("data = ", data);
        try {
         
            var result  = await axiosInstance.post('/register', data);
            console.log('result.data.token',result)
            // commit('SET_LOADING', false);
             if(result.status === 200 && result.data.token) {
                let resultUser  = await dispatch('getUserWithId', result.data.token);
                console.log('result.data.token',result.data.token)
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO',{ user:resultUser.data, token:result.data.token } );
                return {
                    ok: true,
                    error: null,
                    data: result.data
                }
                
            } else {
                return {
                    ok: false,
                    error: result.data.errors
                }
             }
            
        } catch(error) {
            console.log('error');
            
            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
        return null
    },
    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
           
            if(tokenLocal) {
                // let resultUser      = await dispatch('getUserById', userObj.id);
                // let resultPostUser  = await dispatch('getListPostsByUserId', userObj.id);
                let promiseUser         = await dispatch('getUserWithId', tokenLocal);
                //let promisePostUser     = dispatch('getListPostsByUserId', userObj.id);

                //let [resultUser, resultPostUser] = await Promise.all([ promiseUser, promisePostUser ]);

                // D??ng 73 ch???y 3s
                // D??ng 74 ch???y 4s
                // T???ng l???i ch??ng ta ph???i ch??? 7s 
                // Hai API tr??n ch???y ri??ng l??? ???????c hay kh??ng?

                // N???u 2 API tr??n ch???y ?????ng th???i -> t???ng th???i gian ch??? ch??? l?? 4s th??i
                if(promiseUser.ok) {
                    let data = {
                        user: promiseUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data);
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }
            
        } catch(error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
}