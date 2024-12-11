FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["SimpleNotes.API/SimpleNotes.API.csproj", "SimpleNotes.API/"]
COPY ["SimpleNotes.Infrastracture/SimpleNotes.Infrastracture.csproj", "SimpleNotes.Infrastracture/"]
COPY ["SimpleNotes.Application/SimpleNotes.Application.csproj", "SimpleNotes.Application/"]
COPY ["SimpleNotes.Domain/SimpleNotes.Domain.csproj", "SimpleNotes.Domain/"]
RUN dotnet restore "SimpleNotes.API/SimpleNotes.API.csproj"
COPY . .
WORKDIR "/src/SimpleNotes.API"
RUN dotnet build "SimpleNotes.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "SimpleNotes.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SimpleNotes.API.dll"]
