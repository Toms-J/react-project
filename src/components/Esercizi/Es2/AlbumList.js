import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAlbum } from '../../../features/album/albumSlice';
import { CircularProgress } from '@material-ui/core';

const AlbumList = () => {
  const dispatch = useDispatch();
  const { albumOwner, album, loading, loaded } = useSelector(state => state.albumStore);

  useEffect(() => {
    if (albumOwner) {
      dispatch(fetchAlbum(albumOwner.id));
    }
  }, [dispatch, albumOwner]);

  if (!albumOwner) {
    return null;  // se ritorno null in un componento JSX l'applicazione semplicemente non renderizza nulla
  }

  if (loading) {
    return (
      <CircularProgress
      variant="indeterminate"
      disableShrink
      size={40}
      thickness={4}
      />
    )
  }

  return (
    <>
      {loaded && (
        <>
        <h3>The owner is: <strong>{albumOwner.name}</strong></h3>
            <ul>
              {
                album?.map(a => <li key={a.id}>{a.title}</li>)
              }
            </ul>
        </>
      )}
    </>
  )
}

export default AlbumList;