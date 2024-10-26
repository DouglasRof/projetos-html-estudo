function flipar(){
    var login = document.querySelector('div.case')
    var regis = document.querySelector('div.flip')
    var container = document.querySelector('div.container')
    login.innerHTML = '<div class="case"><h1>Cadastrar-se</h1><p>Preencha seus dados para criar sua conta e acessar o seu ambiente!</p><input type ="text" name="nome" id="nome" placeholder="Seu nome" > <label for="nome"></label> <input type="email" name="Email" id="Email" placeholder="Seu email"><label for="Email"></label><input type="password" name="senha" id="senha" placeholder="Sua senha"><label for="senha"></label><input type="button" value="Registrar" class="registrar" id="registrar"><label for="registrar"></label></div><style>.container {background-color: rgb(53, 53, 53); flex-flow: row-reverse nowrap; transition: ease-in 200ms;} .flip{background-color: rgb(12, 12, 12); border-radius: 15px 80px 80px 15px; transition: ease-in 200ms;}</style>'
    regis.innerHTML = '<h2>Já possui conta?</h2><input type="button" value="Entrar" name="login2" id="login2" onclick="desflipar()">'
}
function desflipar(){
    var login = document.querySelector('div.case')
    var regis = document.querySelector('div.flip')
    var container = document.querySelector('div.container')
    login.innerHTML = '<div class="case"><h1>Login</h1><p>Preencha seus dados para acessar o seu ambiente!</p><input type="email" name="Email" id="Email" placeholder="Seu email"><label for="Email"></label><input type="password" name="senha" id="senha" placeholder="Sua senha"><label for="senha"></label><span><a href="#">Esqueceu sua senha?</a></span><input type="button" value="Entrar" class="entrar" id="entrar"><label for="entrar"></label></div><style>.container {background-color: rgb(12, 12, 12); transition: ease-in 200ms;} .flip{background-color: rgb(53, 53, 53); border-radius: 80px 15px 15px 80px; transition: ease-in 200ms;}</style>'
    regis.innerHTML = '<h2>Não criou sua conta ainda?</h2><input type="button" value="Resgistrar-se" name="regis" id="regis" onclick="flipar()">'
}