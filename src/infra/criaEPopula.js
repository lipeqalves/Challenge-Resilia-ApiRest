import DAO from "../DAO/DAO.js";

try{
    await DAO.ativaChavesEstrangeiras()
}catch(e){
    console.log(e.message)
}
import "./CriaPopulaAluno.js";