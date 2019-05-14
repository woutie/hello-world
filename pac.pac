function FindProxyForURL(url, host) {
	if (isInNet(host, "10.0.0.0", "255.0.0.0"))
	{
		return "SOCKS5 192.168.11.52:1080";
	}
	return "DIRECT";
}