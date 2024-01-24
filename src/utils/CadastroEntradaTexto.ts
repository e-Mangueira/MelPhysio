const secoes = [
    {
      id: 1,
      titulo: 'Insira seus dados',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'E-mail'
        },
        {
          id: 3,
          label: 'Crie uma senha',
          placeholder: 'Inserir senha',
          secureTextEntry: true,
        },
        {
          id: 4,
          label: 'Confirme sua senha',
          placeholder: 'Confirmar sua senha',
          secureTextEntry: true,
        },
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Onde você mora?',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digitar seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Digitar seu endereço'
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Digitar número do endereço'
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Digitar complemento do endereço'
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'
        },
      ],
      checkbox: []
    },
    {
      id: 3,
      titulo: 'Qual sua opção de pagamento?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Diário'
        },
        {
          id: 2,
          value: 'Semanal'
        },
        {
          id: 3,
          value: 'Mensal'
        },
        {
          id: 7,
          value: 'Outros'
        }
      ]
    }
  ]
  
  export { secoes }