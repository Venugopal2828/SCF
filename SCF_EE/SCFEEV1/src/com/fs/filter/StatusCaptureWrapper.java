package com.fs.filter;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

public class StatusCaptureWrapper extends HttpServletResponseWrapper {

	private int httpStatus = SC_OK;

	public StatusCaptureWrapper(HttpServletResponse response) {
		super(response);
	}

	@Override
	public void setStatus(int sc) {
		this.httpStatus = sc;
		super.setStatus(sc);
	}

	@Override
	public void sendError(int sc) throws IOException {
		this.httpStatus = sc;
		super.sendError(sc);
	}

	@Override
	public void sendError(int sc, String msg) throws IOException {
		this.httpStatus = sc;
		super.sendError(sc, msg);
	}

	@Override
	public void sendRedirect(String location) throws IOException {
		this.httpStatus = SC_MOVED_TEMPORARILY;
		super.sendRedirect(location);
	}

	public int getStatus() {
		return httpStatus;
	}
}
