import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Erro", "Participante já cadastrado")
    }

    if (participantName.length === 0) {
      return Alert.alert("Erro", "Participante em branco")
    }

    setParticipants(prevState => [...prevState, participantName]);

    setParticipantName('')
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Pergunta", `Remover participante ${name}?`, [
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => {
          setParticipants(prevState => prevState.filter(n => n !== name))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>{dayjs().locale('pt-br').format('dddd, D [de] MMMM [de] YYYY')}</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
          style={styles.input}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante cadastrado.</Text>
        )}
      />
    </View>
  );
}