import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import LiftCard from '../components/Liftcard.tsx';
import { mockFeed } from '../lib/mock';
import { Ionicons } from '@expo/vector-icons';


export default function Feed(){
  return (
    <View style={styles.wrap}>
      {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.headerAvatar}>
            <Ionicons name="person" size={18} color="#0C1412" />
          </Pressable>
          <Text style={styles.headerTitle}>Feed</Text>
          <Pressable style={styles.headerIcon}>
            <Ionicons name="settings-outline" size={22} color="#E7EFEA" />
          </Pressable>
        </View>


        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100, gap: 18 }}
          data={mockFeed}
          keyExtractor={(i) => i.id}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => <LiftCard item={item} />}
        />


        {/* Bottom Tabs (static for this mock) */}
        <View style={styles.tabs}>
          <TabItem icon="home" label="Feed" active />
          <TabItem icon="add-circle" label="Log" />
          <TabItem icon="trophy" label="Leaderboards" />
          <TabItem icon="person" label="Profile" />
        </View>
    </View>
    );
}

function TabItem({ icon, label, active }: { icon: any; label: string; active?: boolean }){
  return (
    <View style={styles.tabItem}>
      <Ionicons name={icon} size={24} color={active ? '#58E6B3' : '#C4D6CD'} />
      <Text style={[styles.tabLabel, active && { color: '#58E6B3', fontWeight: '700' }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    wrap: { flex: 1, backgroundColor: '#0C1412' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
    headerAvatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#C4D6CD', alignItems: 'center', justifyContent: 'center' },
    headerTitle: { color: '#E7EFEA', fontSize: 20, fontWeight: '700' },
    headerIcon: { padding: 4 },
    tabs: { position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#121A18', borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#22302B' },
    tabItem: { alignItems: 'center', gap: 2 },
    tabLabel: { color: '#C4D6CD', fontSize: 12 },
});