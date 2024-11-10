const app1 = {
    data(){
        return{
            nombre: '',
            telefono: '',
            tipo: '',
            contacto: [],
            mensajes: 0,
            llamadas: 0,
        }
    },
    methods: {
        agregar(){
            if (this.nombre && this.telefono && this.tipo) {
                this.contacto.push({
                    nombre: this.nombre,
                    telefono: this.telefono,
                    tipo: this.tipo,
                    mensajes: 0,
                    llamadas: 0
                });
                this.nombre = '';
                this.telefono = '';
                this.tipo = '';
            }
        },
        borrar(i){
            this.contacto.splice(i, 1);
        }
    },
    computed:{
        cantidadContactos() { 
            return this.contacto.length; 
        }, 
        totalMensajes() { 
            return this.contacto.reduce((sum, con) => sum + con.mensajes, 0); 
        }, 
        totalLlamadas() { 
            return this.contacto.reduce((sum, con) => sum + con.llamadas, 0); 
        } 
    }
};
Vue.createApp(app1).mount('#seccion');
