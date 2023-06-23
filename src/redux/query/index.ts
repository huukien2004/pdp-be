import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IChangePasswordParams,
  IEditProfileParams,
  ILoginParams,
  IRegisterParams,
} from "../../type/params";
import { ICommonResponse, ILoginResponse, IUser } from "../../type/response";
import Cookies from "universal-cookie";

const endPoint = "http://localhost:4105/api/";
const cookies = new Cookies();

const handleApi = (input: any) => {
  const isAuthentication = cookies.get("isAuthentication");
  const accessToken = cookies.get("accessToken");
  if (isAuthentication) {
    return {
      ...input,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  } else {
    return input;
  }
};
export const apiCaller = createApi({
  reducerPath: "apiCaller",
  baseQuery: fetchBaseQuery({
    baseUrl: endPoint,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", `*`);
      return headers;
    },
  }),
  tagTypes: ["user"],
  // get data settings
  endpoints: (builder) => ({
    register: builder.mutation<string, IRegisterParams>({
      query: (input) => {
        return handleApi({
          url: `auth/register`,
          method: "POST",
          body: {
            ...input,
          },
        });
      },
    }),

    login: builder.mutation<ILoginResponse, ILoginParams>({
      query: (input) => {
        return handleApi({
          url: `auth/login`,
          method: "POST",
          body: {
            ...input,
          },
        });
      },
    }),

    changePassword: builder.mutation<ICommonResponse, IChangePasswordParams>({
      query: (input) => {
        return handleApi({
          url: `auth/change-password`,
          method: "POST",
          body: {
            ...input,
          },
        });
      },
    }),

    getUser: builder.query<IUser, undefined>({
      query: () => {
        return handleApi({
          url: `/profile`,
          method: "GET",
        });
      },
      providesTags: [{ type: "user" }],
    }),

    editProfile: builder.mutation<ICommonResponse, IEditProfileParams>({
      query: (input) => {
        return handleApi({
          url: `profile/update`,
          method: "PUT",
          body: {
            ...input,
          },
        });
      },
      invalidatesTags: [{ type: "user" }],
    }),
  }),
});
