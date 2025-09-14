import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';

type CardData = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

const cardsData: CardData[] = [
  {
    id: '1',
    title: 'title 1',
    date: 'Sept 15, 2025',
    description: 'Example details text 1',
    imageUrl: 'https://placeholder.com/150',
  },
  {
    id: '2',
    title: 'title 2',
    date: 'Sept 20, 2025',
    description: 'Example details text 2',
    imageUrl: 'https://placeholder.com/150',
  },
  {
    id: '3',
    title: 'title 3',
    date: 'Sept 20, 2025',
    description: 'Example details text 3',
    imageUrl: 'https://placeholder.com/150',
  },
    {
    id: '4',
    title: 'title 4',
    date: 'Sept 20, 2025',
    description: 'Example details text 4',
    imageUrl: 'https://placeholder.com/150',
  },
];

const Card = ({ title, date, description, imageUrl }: Omit<CardData, 'id'>) => (
  <View style={styles.card}>
    <Image
      source={{ uri: imageUrl }}
      style={styles.cardImage}
    />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDate}>{date}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  </View>
);

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.bannerText}>InternshipApp</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Banner />
      <ScrollView style={styles.container}>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            date={card.date}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  banner: {
    height: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginTop: 60,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});