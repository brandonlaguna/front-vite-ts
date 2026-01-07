# Redux Toolkit Setup - Guía de Uso

## Estructura

```
store/
├── store.js              # Configuración principal
├── authSlice.js          # Estado de autenticación
├── postsSlice.js         # Estado de posts
├── uiSlice.js            # Estado de UI
└── hooks.js              # Hooks personalizados
```

## Estados disponibles

### 1. Auth (Autenticación)

```javascript
{
  user: null,              // Usuario actual
  token: null,             // JWT token
  isAuthenticated: false,  // Estado de login
  loading: false,          // Loading durante operaciones
  error: null              // Mensajes de error
}
```

**Acciones disponibles:**

- `setUser(userData)` - Setear usuario tras login
- `clearAuth()` - Logout
- `setAuthLoading(boolean)` - Actualizar loading
- `setAuthError(error)` - Setear error
- `updateUser(updates)` - Actualizar datos del usuario

### 2. Posts

```javascript
{
  posts: [],               // Lista de posts
  currentPost: null,       // Post seleccionado
  loading: false,          // Loading
  error: null,             // Error
  totalCount: 0,           // Total de posts
  currentPage: 1           // Página actual
}
```

**Acciones disponibles:**

- `setPosts(data)` - Setear lista de posts
- `addPost(post)` - Agregar nuevo post
- `setCurrentPost(post)` - Setear post actual
- `updatePost(updates)` - Actualizar un post
- `deletePost(id)` - Eliminar un post
- `setPostsLoading(boolean)`
- `setPostsError(error)`
- `clearPosts()` - Limpiar estado

### 3. UI (Interfaz)

```javascript
{
  isMenuOpen: false,       // Menu abierto
  isModalOpen: false,      // Modal abierto
  theme: "light",          // Tema (light | dark)
  notifications: [],       // Notificaciones
  sidebarOpen: false       // Sidebar abierto
}
```

**Acciones disponibles:**

- `toggleMenu()` / `setMenuOpen(boolean)`
- `toggleModal()` / `setModalOpen(boolean)`
- `setTheme("light" | "dark")`
- `addNotification(data)` - Agregar notificación
- `removeNotification(id)` - Remover notificación
- `clearNotifications()`
- `toggleSidebar()` / `setSidebarOpen(boolean)`

## Cómo usar en componentes

### Lectura de estado

```javascript
import { useAppSelector } from "../store/hooks";

export default function MiComponente() {
  // Acceder a estado de autenticación
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  // Acceder a posts
  const { posts, loading } = useAppSelector((state) => state.posts);

  // Acceder a UI
  const { theme, notifications } = useAppSelector((state) => state.ui);

  return (
    <div>
      {isAuthenticated ? <p>Hola, {user.name}</p> : <p>No autenticado</p>}
    </div>
  );
}
```

### Dispatch de acciones

```javascript
import { useAppDispatch } from "../store/hooks";
import { setUser, clearAuth } from "../store/authSlice";
import { addPost } from "../store/postsSlice";
import { addNotification } from "../store/uiSlice";

export default function MiComponente() {
  const dispatch = useAppDispatch();

  const handleLogin = (userData) => {
    dispatch(setUser(userData));
    dispatch(
      addNotification({
        type: "success",
        message: "Login exitoso",
        duration: 3000,
      })
    );
  };

  const handleLogout = () => {
    dispatch(clearAuth());
  };

  const handleCreatePost = (postData) => {
    dispatch(addPost(postData));
    dispatch(
      addNotification({
        type: "success",
        message: "Post creado",
      })
    );
  };

  return (
    <div>
      <button onClick={() => handleLogin({ name: "Juan" })}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => handleCreatePost({ title: "Mi post" })}>
        Crear post
      </button>
    </div>
  );
}
```

### Ejemplo completo: Componente de Posts

```javascript
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPosts, setPostsLoading, setPostsError } from "../store/postsSlice";

export default function PostsList() {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  // Cargar posts al montar
  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setPostsLoading(true));
      try {
        const data = await fetch("/api/posts").then((r) => r.json());
        dispatch(setPosts({ posts: data, totalCount: data.length, page: 1 }));
      } catch (err) {
        dispatch(setPostsError(err.message));
      } finally {
        dispatch(setPostsLoading(false));
      }
    };

    fetchPosts();
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Integración con API

Para integrar con tus servicios, ejemplo:

```javascript
// src/store/thunks/postsThunks.js
import { ExampleService } from "../../services";
import { setPosts, setPostsLoading, setPostsError } from "../postsSlice";

export const fetchPosts = () => async (dispatch) => {
  dispatch(setPostsLoading(true));
  try {
    const data = await ExampleService.getPosts();
    dispatch(
      setPosts({
        posts: data.response,
        totalCount: data.response.length,
        page: 1,
      })
    );
  } catch (error) {
    dispatch(setPostsError(error.message));
  } finally {
    dispatch(setPostsLoading(false));
  }
};
```

Luego usar en componentes:

```javascript
import { useAppDispatch } from "../store/hooks";
import { fetchPosts } from "../store/thunks/postsThunks";

// En el componente
const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(fetchPosts());
}, [dispatch]);
```

## Persist (Opcional)

Para persistir el estado en localStorage (útil para auth):

```javascript
// store/store.js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // solo persistir auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
```

Luego en `_app.js`:

```javascript
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

<Provider store={store}>
  <PersistGate loading={<PreLoader />} persistor={persistor}>
    <Component {...pageProps} />
  </PersistGate>
</Provider>;
```

---

**Documentación Redux Toolkit:** https://redux-toolkit.js.org/
