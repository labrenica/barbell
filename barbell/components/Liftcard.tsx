import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FeedItem } from '../lib/mock';
import { Ionicons } from '@expo/vector-icons';


export default function LiftCard({ item }: { item: FeedItem }){
    return (
        <View style={styles.card}>
            {/* Row: avatar + name + time */}
            <View style={styles.row}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{item.user.initial}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.user.name}</Text>
                    <Text style={styles.time}>{item.timeAgo}</Text>
                </View>
        </View>


        {/* Image/Video placeholder */}
        <View style={styles.mediaWrap}>
            <Image source={{ uri: item.image }} style={styles.media} resizeMode="cover" />
        </View>


        {/* Title + subtitle */}
        <View style={{ paddingHorizontal: 14, paddingTop: 10 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>


        {/* Chips */}
        <View style={styles.chipsRow}>
            {item.chips.map((c) => (
        <View key={c} style={styles.chip}>
            <Text style={styles.chipText}>{c}</Text>
            </View>     
        ))}
        </View>


    {/* Actions */}
    <View style={styles.actions}>
    <Action icon="heart" value={String(item.likes)} />
    <Action icon="chatbubble-ellipses-outline" value={String(item.comments)} />
    <Action icon="send" value={String(item.shares)} />
    <View style={{ flex: 1 }} />
    <Ionicons name="bookmark-outline" size={22} color="#C4D6CD" />
    </View>


    {/* Divider */}
    <View style={styles.divider} />
    </View>
    );
}

function Action({ icon, value }: { icon: any; value: string }){
return (
<View style={styles.actionItem}>
<Ionicons name={icon} size={22} color="#FF8356" style={{ marginRight: 8 }} />
<Text style={styles.actionValue}>{value}</Text>
</View>
);
}


const styles = StyleSheet.create({
card: { backgroundColor: '#121A18', borderRadius: 16, overflow: 'hidden' },
row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14 },
avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E7EFEA', alignItems: 'center', justifyContent: 'center' },
avatarText: { color: '#121A18', fontWeight: '700' },
name: { color: '#E7EFEA', fontWeight: '700', fontSize: 16 },
time: { color: '#8BA7A0', marginTop: 2 },
mediaWrap: { marginHorizontal: 14, borderRadius: 16, overflow: 'hidden' },
media: { width: '100%', height: 210 },
title: { color: '#E7EFEA', fontWeight: '800', fontSize: 20 },
subtitle: { color: '#8BA7A0', marginTop: 4, fontSize: 16 },
chipsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, paddingHorizontal: 14, paddingTop: 12 },
chip: { backgroundColor: '#1C2623', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 999 },
chipText: { color: '#CFE3DA', fontWeight: '700' },
actions: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12, gap: 18 },
actionItem: { flexDirection: 'row', alignItems: 'center' },
actionValue: { color: '#CFE3DA', fontWeight: '600' },
divider: { height: 1, backgroundColor: '#22302B', marginHorizontal: 16, marginTop: 8 },
});