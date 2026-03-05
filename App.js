import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Guilherme Ferraz de Medeiros",
    bio: "Acho filmes, jogos, séries, livros e quadrinhos levemente interessantes 🌙",
    curso: "Ciência da Computação - 2026",
    avatar: "https://avatars.githubusercontent.com/u/105013367?s=400&u=2ddf763a1a0bad0d059b2e3bc6dbf78ac2e005b4&v=4",
    links: "https://github.com/Gui-Ferraz-Medeiros & https://www.linkedin.com/in/guilherme-ferraz-de-medeiros-5078a21aa/"
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>📚 Curso - {usuario.curso} </Text>
      {/*Links */}
      <View style={styles.links}>
        <Text style={styles.link}>⛓️ Links - {usuario.links}
        </Text>
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F4F4F',
    padding: 20,
  },
  avatar: {
    width: 240,
    height: 240,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: '#FFFF00',
    marginBottom: 16,
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F8F8FF',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#00FA9A',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  link: {
    color: '#DC143C',
    fontSize: 14,
  },
  links: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#DC143C',
    fontSize: 14,
  },
});