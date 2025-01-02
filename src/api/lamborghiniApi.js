export const fetchLamborghiniData = async () => {
    try {
      const response = await fetch(
        'https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json'
      );
      const data = await response.json();
      // Retorna apenas o array de carros
      return data.cars;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return [];
    }
  };
  