import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLoading: boolean = false;
  funcionarios: any;

  constructor() {
    this.getFuncionarios();
  }

  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/API_fatec/funcionario/listar_funcionario.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response.funcionarios;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

sobrenomeIP: string=''
nomeIP: string=''
cargoIP: string=''
datanascIP: string=''
enderecoIP: string=''
cidadeIP: string=''
cepIP: string=''
paisIP: string=''
foneIP: string=''
salarioIP: string=''

async enviarDados(){
  this.isLoading = true;

  const dados = {
    'sobrenome' : this.sobrenomeIP,
    'nome' : this.nomeIP,
    'cargo' : this.cargoIP,
    'datanasc' : this.datanascIP,
    'endereco' : this.enderecoIP,
    'cidade' : this.cidadeIP,
    'cep' : this.cepIP,
    'pais' : this.paisIP,
    'fone' : this.foneIP,
    'salario' : this.salarioIP,
  }
  const body = JSON.stringify(dados);
  fetch('http://localhost/API_fatec/funcionario/inserir_funcionario.php',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body
  }
)
.then(response => response.json())
.then(response => {
  console.log(response);
  this.getFuncionarios();
})
.catch(erro => {
  console.log(erro);
})
.finally(()=>{
  this.isLoading = false;
  
})
}


  remover(id: any){
    this.isLoading = true;
    fetch('http://localhost/API_fatec/funcionario/remover_funcionario.php',
			{
			  method: 'post',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({ CodFun: id })
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.getFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
      
    })
  }

  atualizar(id: any){
    this.isLoading = true;
    fetch('http://localhost/API_fatec/funcionario/remover_funcionario.php',
			{
			  method: 'post',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({ CodFun: id })
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.getFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
      
    })
  }
  

}