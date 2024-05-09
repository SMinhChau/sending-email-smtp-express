import { WrapperLayout } from "./style";
import Header from "../header";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Layout = () => {
  return (
    <WrapperLayout>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Toggle Dark mode</h2>
        <Card sx={{ width: "30%", borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 180, borderRadius: 3 }}
              image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              title="semaphore"
            />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Programming Blogs
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by Semaphore
            </Typography>
            <Typography variant="body1">
              Checkout the latest blogs on Semaphore. Semaphore provides you the
              best CI/CD solution for high-performance engineering teams.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </WrapperLayout>
  );
};

export default Layout;
