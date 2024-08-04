import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as JotaiProvider } from "jotai";
import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 데이터가 신선한 상태로 간주되는 시간 (5분)
      gcTime: 10 * 60 * 1000, // 데이터가 캐시에 유지되는 시간 (10분)
      refetchOnWindowFocus: false, // 창이 포커스를 받을 때 쿼리를 다시 가져오지 않음
      retry: false, // 실패한 쿼리를 재요청 하지 않음
    },
  },
});

function App() {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <div>hi</div>
          <ReactQueryDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </JotaiProvider>
  );
}

export default App;
