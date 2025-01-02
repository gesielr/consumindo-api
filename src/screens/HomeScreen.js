import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchLamborghiniData } from '../api/lamborghiniApi';

const HomeScreen = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchLamborghiniData();
        if (data && data.length > 0) {
          setCars(data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCars();
  }, []);

  const handleNext = () => {
    if (currentIndex < cars.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00b894" />
      </View>
    );
  }

  if (cars.length === 0) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.errorMessage}>Nenhum carro encontrado!</Text>
      </View>
    );
  }

  const currentCar = cars[currentIndex];

  return (
    <View style={styles.container}>
      
      <View style={styles.cardContainer}>        
        <View style={styles.card}>
             {/* Recortes nos Cantos */}
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
             {/* Conteúdo do Card */}
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.logoLine} />
         <Text style={styles.name}>{currentCar.carName}</Text>
          <Image source={{ uri: `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${currentCar.id}.png` }} style={styles.image} />
          <View style={styles.logoLine} />
         <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy This</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.price}>{currentCar.price}</Text>
          </View>
          <TouchableOpacity style={styles.navButtonE} onPress={handlePrevious}>
             <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButtonD} onPress={handleNext}>
             <Text style={styles.navButtonTextE}>{">"}</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    
  },
  logo: {
    width: 200,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 20,
},

  logoLine: {
    width: '85%', // Largura da linha em relação ao contêiner
    height: 2, // Espessura da linha
    backgroundColor: '#00B793', // Cor da linha (ajuste conforme necessário)
    alignSelf: 'center', // Centraliza a linha
    marginBottom: 20, // Espaçamento abaixo da linha
},
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButtonD: {
    backgroundColor: 'blue',
    borderRadius: 3,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o texto no botão
    borderWidth: 1,
    borderColor: '#fff',
    left: 100, // Ajusta a posição para o lado direito do contêiner
    marginTop: -29,
   
  },
  navButtonE: {
    backgroundColor: 'blue',
    borderRadius: 3,
    width: 30,
    height: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center', // Centraliza o texto no botão
    right: 100,
  },

  navButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navButtonTextE: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    left: 9,
  },

  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    borderWidth: 2,
    borderColor: '#fff',
    left: 35,
    position: 'relative', // Necessário para posicionar os recortes
    overflow: 'hidden', // Garante que os recortes fiquem internos
  },
  corner: {
    position: 'absolute',
    width: 0, // Nenhuma largura real (para formar triângulos)
    height: 0, // Nenhuma altura real (para formar triângulos)
    borderStyle: 'solid',
},
topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 25, // Tamanho horizontal do triângulo
    borderTopWidth: 25,   // Tamanho vertical do triângulo
    borderRightColor: 'transparent',
    borderTopColor: '#fff', // Cor sólida branca
},
topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 25,
    borderTopWidth: 25,
    borderLeftColor: 'transparent',
    borderTopColor: '#fff', // Cor sólida branca
},
bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 25,
    borderBottomWidth: 25,
    borderRightColor: 'transparent',
    borderBottomColor: '#fff', // Cor sólida branca
},
bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 25,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderBottomColor: '#fff', // Cor sólida branca
},

image: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#ffff',
    marginTop: 55,
    marginBottom: -27,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#00b894',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 0,
    marginBottom: -40,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    width: 190,
    textAlign: 'center',
    fontSize: 15,
  },
  errorMessage: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
