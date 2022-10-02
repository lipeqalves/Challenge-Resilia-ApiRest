class ValidacoesService {
  /**
   *Metodo valida se string tem mais que 4 caracteres
   * @param {string} nome
   * @returns boolean
   */
  static validaNome(nome) {
    if (!nome) {
      return false
    }
    const str = parseInt(nome);
    return nome.length >= 4 && str != nome;
  }
}

export default ValidacoesService;
