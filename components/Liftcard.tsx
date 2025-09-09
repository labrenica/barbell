import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FeedItem } from '../lib/mock';
import { Ionicons } from '@expo/vector-icons';


export default function LiftCard({ item }: { item: FeedItem }){
    return (
        <View style={styles.card}>
            {/* Row: avatar + name + time */}
            <View style={styles.row}>
                <View style={styles.avatar}><Text style={styles.avatarText}>{item.user.initial}</Text></View>
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
<View key={c} style={styles.chip}><Text style={styles.chipText}>{c}</Text></View>
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