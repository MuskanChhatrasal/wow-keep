export const authReducer = (state, { type, payload }) => {
	switch (type) {
		case "LOGIN_SUCCESS":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "success" }, signedIn: true, userName: payload.name, userEmail: payload.email, userID: payload.userID }
		case "LOGIN_ERROR":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" } }

		case "HANDLER_ERROR":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" } }

		case "REMOVE_TOAST":
			return { ...state, toastData: { ...state.toastData, display: false } }

		case "LOGOUT":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" }, signedIn: false, userName: payload.name, userEmail: payload.email, userID: payload.userID }

        case "GET_ALL_NOTES":
            return{...state, toastData:{...state.toastData, display: false}, notes: payload.data}

        case "ADD_NOTE":
            return{...state, toastData:{display: true, data:payload.toastMessage, status: "success"}, notes: payload.data}

		case "ARCHIVE_NOTE":
            return{...state, toastData:{display: true, data:payload.toastMessage, status: "success"}, notes: payload.notesData, archivedNotes: payload.archivedData}

		case "GET_ARCHIVED_NOTES":
            return{...state, toastData:{...state.toastData, display: false}, archivedNotes: payload.archivedData}	

			case "DELETE_FROM_ARCHIVE":
            return{...state, toastData:{display: true, data:payload.toastMessage, status: "alert"}, archivedNotes: payload.data}
        
        case "RESTORE_FROM_ARCHIVE":
            return{...state, toastData:{display: true, data:payload.toastMessage, status: "success"}, notes: payload.notesData, archivedNotes: payload.archivedData}
		default:
			return { ...state }
	}
}