/*
Ser autenticavel signjifica ter o método autenticar 

ducky type
*/
export class SistemaAutAenticacao{
    static login(autenticavel, senha){
        if(SistemaAutAenticacao.ehAutenticavel(autenticavel)){
            
            return autenticavel.autenticar(senha);
        }
        return false;        
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}