import mock from './mock' 

import './auth/jwt'
import './pages/landing'

mock.onAny().passThrough()
