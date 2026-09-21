
///////////////////////////////////////////////////////////////

14/9/26

1- Criamos uma files em todas as pastas exceto em ( Config e index.js )
2- Files essas que são usuarios (Index.js)  
3- Copiamos os files carro e trocamos por "_Usuarios,Usuarios_"
4- Criamos o login  
*Trocamos as cosnt carro,carros,carroDetalhe... trocamos isso por usuario...etc*

Depois instalamos o middleware

na raiz crie o middleware -> "index.js" = [auth.js]

npm i bcrypt jsonwebtoken

vamos criar o login 
 ///////////////////////////////////////////////////////////////////////
 18/9/26 Brites> estou revisando os materias para a prova segunda (21/9)

 1- Primerio passo você ira fazer os npm is

npm init  
npm install express
npm sequelize mysql2
npm i bcrypt jsonwebtoken

depois disso ira mudar no 

***json**
{

    type:"Module"
     // No type coloque Module

    "test": "jest",                 
      // No teste coloque "jeste"

    "dev": "node --watch index.js"    
     //No dev coloque  "node --watch index.js" // vira outra coisa escrita ai tu coloca isso 

}

2- Segundo você ira criar os Folders e os files ( De acordo com o que o sor pedir !_!)

3- depois de fazer o cotrol e o service voce ira fazer o middleware e o service e o router ai faz o login e algumas mias coisas 


// 21/9/26

_index.js >_

*** Somente nesses aqui você importar o express ***


 aqui voce ira importar o express 

e todos os index.js ( ou o nome que  o sor passar )do folders

agora pestr atenção 

o import do carro você ira importar do /ROUTER/CARRO.js
a mesma coisa com os usuarios /ROUTER/USUARIOS.js


_router >_


