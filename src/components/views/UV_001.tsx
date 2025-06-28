import React, { useState, useEffect, useCallback } from '"'"'"'"'"'"'"'"'react'"'"'"'"'"'"'"'"';
import axios from '"'"'"'"'"'"'"'"'axios'"'"'"'"'"'"'"'"';
import { useQuery, useMutation, useQueryClient } from '"'"'"'"'"'"'"'"'@tanstack/react-query'"'"'"'"'"'"'"'"';

// Import from the global Zustand store for lookup data and session management
import { useAppStore, Genre, Mood, StreamingService, ContentDetails } from '"'"'"'"'"'"'"'"'@/store/main'"'"'"'"'"'"'"'"';

// Define the base URL for API calls
const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || '"'"'"'"'"'"'"'"'http://localhost:3000'"'"'"'"'"'"'"'"'}`;

