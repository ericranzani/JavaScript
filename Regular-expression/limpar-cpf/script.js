const cpfsList = document.querySelectorAll(".cpf li");

//função expression para transformar um nodeList em uma array
elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, ""); //limpa tudo que não for digito
};

const construiCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCpfs = (cpfs) => {
  return cpfs.map(limparCpf).map(construiCpf);
};

const subtituirCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCpfs(cpfs);
  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

subtituirCpfs(cpfsList);
