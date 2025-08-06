function status(request, response) {
  //response.status(200).json({ chave: "Filipe é acima da media" });

  response.status(200).send("Sem Usar JSON");
}

export default status;
