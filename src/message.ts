import App from './app'

const app = new App().getApp()

app.listen(3000, () =>{
  console.log("Servidor inicializado");
})