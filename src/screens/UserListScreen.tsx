import React, {useEffect, useState, useMemo} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/usersSlice';
import {RootState, AppDispatch} from '../redux/store';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';



export default function UserListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const {users, loading, page} = useSelector((s: RootState) => s.users);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, []);

  const filtered = useMemo(() => {
    return users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  return (
    <View>
      <SearchBar value={search} onChange={setSearch} />

      <FlatList
        data={filtered}
          keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <UserCard user={item} />}
        onEndReached={() => dispatch(fetchUsers(page))}
        onEndReachedThreshold={0.5}
      />

      {loading && <ActivityIndicator size="large" />}
    </View>
  );
}