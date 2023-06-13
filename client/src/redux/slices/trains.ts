import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import TrainService from "../../services/TrainService";
import { ITrain } from "../../types";

interface IState {
  trains: ITrain[];
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  trains: [],
  loading: false,
  error: null,
};

// post
export const createTrain = createAsyncThunk(
  "trains/create",
  async ({ 
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    distance,
    stops
  }: ITrain) => {
    const res = await TrainService.create({
      trainName,
      departureStation,
      departureTime,
      arrivalStation,
      arrivalTime,
      distance,
      stops
      });
    return res.data;
  }
);

// get
export const fetchTrains = createAsyncThunk(
  "trains/fetch",
  async ({ search = '', sort = '' }: { search?: string; sort?: string }) => {
    const res = await TrainService.getAll(search, sort);
    return res.data.trains;
  }
);

// update
export const updateTrain = createAsyncThunk(
  "trains/update",
  async ({ id, data }: { id: string; data: ITrain }) => {
    const res = await TrainService.update(id, data);
    return res.data.train;
  }
);

// delete
export const deleteTrain = createAsyncThunk(
  "trains/delete",
  async (id: string ) => {
    const res = await TrainService.remove(id);
    return res.data
  }
);

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // post
    builder.addCase(createTrain.pending, (state) => {
      state.loading = true
    })
    builder.addCase(createTrain.fulfilled, (state, action: PayloadAction<ITrain>) => {
      state.loading = false;
      state.trains = [ ...state.trains, action.payload]
      state.error = ''
    })
    builder.addCase(createTrain.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to create train.';
    })

    // get
    builder.addCase(fetchTrains.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchTrains.fulfilled, (state, action: PayloadAction<ITrain[]>) => {
      state.loading = false;
      state.trains = action.payload;
      state.error = '';
    })
    builder.addCase(fetchTrains.rejected, (state) => {
      state.loading = false;
      state.trains = [];
      state.error = 'Failed to get trains.';
    })

    // update
    builder.addCase(updateTrain.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(updateTrain.fulfilled, (state, action: PayloadAction<ITrain>) => {
      state.loading = false
      const index = state.trains.findIndex((p) => p._id === action.payload._id)
      state.trains[index] = action.payload
      state.error = ''
    })
    builder.addCase(updateTrain.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to update train.';
    })

    // delete
    builder.addCase(deleteTrain.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(deleteTrain.fulfilled, (state, action: PayloadAction<ITrain>) => {
      state.loading = false;
      state.trains = state.trains.filter((train) => train._id !== action.payload._id);
    })
    builder.addCase(deleteTrain.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to remove train.';
    })
  },
});

const { reducer } = trainSlice;
export default reducer;